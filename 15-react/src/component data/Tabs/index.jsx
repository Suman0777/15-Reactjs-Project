import React from 'react'

export default function Tabss({ tabscontent, onchange }) {
  return (
    <div className='wrapper'>
      <div className='heading'>
        {tabscontent.map(tabItem => (
          <div
            key={tabItem.label}
            onClick={() => onchange(tabItem)}
            className='tab-label'
          >
            {tabItem.label}
          </div>
        ))}
      </div>
      <div className='content'>
        {/* You can render the selected tab's content here */}
      </div>
    </div>
  );
}