pipeline {
    agent any

    environment {
        VITE_IRONSTACK_API_URL = 'https://ironstack-backend.ironstacksystems.workers.dev'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Verify Build') {
            steps {
                sh 'test -d dist'
                sh 'test -f dist/index.html'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'cloudflare-api-token', variable: 'CLOUDFLARE_API_TOKEN')]) {
                    sh 'npx wrangler deploy'
                }
            }
        }
    }

    post {
        success {
            echo 'BUILD SUCCESSFUL'
        }

        failure {
            echo 'BUILD FAILED'
        }
    }
}
