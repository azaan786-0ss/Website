import { Link } from "react-router-dom";

export function BrandIdentityShowcase() {
  return (
    <section className="py-space-24 px-space-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-bg-dark-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-space-12 lg:p-space-20 lg:w-1/2 flex flex-col justify-center">
            <span className="text-primary-fixed-dim font-caption text-caption uppercase tracking-widest mb-space-6 block">Featured Transformation</span>
            <h2 className="text-white font-display-lg text-display-lg mb-space-8">Cloud Platform Complete Rebrand</h2>
            <div className="flex items-center gap-space-4 mb-space-12">
              <div className="text-white text-5xl font-bold">300%</div>
              <div className="text-secondary-fixed-dim text-body-md max-w-[150px]">Increase in Enterprise Inquiries</div>
            </div>
            <Link to="/start-project">
              <button className="w-fit px-space-8 py-space-4 bg-primary-container text-on-primary rounded-lg font-semibold hover:bg-primary-container/90 transition-all active:scale-[0.98]">
                View Brand Showcase
              </button>
            </Link>
          </div>
          <div 
            className="lg:w-1/2 h-80 lg:h-auto min-h-[400px] bg-cover bg-center" 
            title="A sophisticated collage of premium brand identity assets for a cloud technology company." 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnereYSEnpwlVx5J9wazO9Eny6hOaRZyVK0nuRNdV1FzP6oGd59M-ihGRDr7Lrf7l-6MwON0BslWDa8nHfQ31Sk7QDS2Fs4ZvmhdT9T_0UXmnDzN6kL5uFlHFwizjDRytQ9nu_wlj_rOkdwCjtQjM2sHui2cinZQqGtEcubsIC4ziIP7gonjdmJPmyyn09EjlMPTyVFvwR1jK_iwEXiVXSW0JQcjXJHY62RxYT_QgNWAePAgDNNAWsiw')" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
