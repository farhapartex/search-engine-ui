import React from 'react';

const PromotionalPanel = ({ title, subtitle, features, stats, gradientColors }) => {
  return (
    <div className={`hidden lg:flex items-center justify-center p-12 ${gradientColors}`}>
      <div className="max-w-lg text-white">
        <div className="mb-8">
          <svg className="w-16 h-16 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-opacity-90 mb-8">{subtitle}</p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-opacity-30 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-opacity-90">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {stats && (
          <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">{stats.icon}</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-opacity-90 mb-1">{stats.label}</p>
                <p className="text-3xl font-bold">{stats.value}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromotionalPanel;
