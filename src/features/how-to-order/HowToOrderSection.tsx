import { ORDER_STEPS } from '@/constants/steps';

export function HowToOrderSection() {
  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">Cara Menikmati Hikari</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {ORDER_STEPS.map((step, idx) => (
            <div key={step.id} className="relative group">
              <div className="w-20 h-20 bg-white shadow-xl shadow-gray-100 rounded-[2rem] flex items-center justify-center text-[#BC2026] mx-auto mb-6 transition-all group-hover:scale-110 group-hover:shadow-red-100">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 tracking-tight">{step.title}</h3>
              <p className="text-gray-900 text-sm leading-relaxed">{step.description}</p>
              {idx < ORDER_STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 left-[65%] w-full h-[1px] bg-gray-100 -z-10"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}