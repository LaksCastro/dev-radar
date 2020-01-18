import React from 'react';
import ContentLoader from 'react-content-loader';

export default function Loader() {
  return (
    <div
      style={{
        height: '200px',
        width: '100%',
        borderRadius: '4px',
        padding: '2rem',
        backgroundColor: '#fff',
      }}
    >
      <ContentLoader
        height={120}
        width={600}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="70" y="15" rx="4" ry="4" width="117" height="6" />
        <rect x="70" y="35" rx="3" ry="3" width="85" height="6" />
        <rect x="0" y="80" rx="3" ry="3" width="350" height="6" />
        <rect x="69" y="96" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="120" rx="3" ry="3" width="201" height="6" />
        <circle cx="30" cy="30" r="30" />
      </ContentLoader>
    </div>
  );
}
