const fs = require('fs');

const file = 'src/components/sections/service/strategy/ProductStrategyHero.tsx';
let content = fs.readFileSync(file, 'utf8');

// Restore gradient and remove SplitText
content = content.replace(
  'className="text-slate-900 font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl text-slate-900 leading-tight tracking-tight"',
  'className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#6366f1,55%,#0f172a)] bg-[length:200%_100%] font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl leading-tight tracking-tight"'
);

content = content.replace(
  '<SplitText text={titleText} />',
  '{titleText}'
);

fs.writeFileSync(file, content);
console.log('Fixed ProductStrategyHero.tsx');
