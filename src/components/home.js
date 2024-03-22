import React from 'react';

export default function Home() {
  return (
    <div style={{
        backgroundImage: `url('https://media.assettype.com/fortuneindia/2022-05/1237177f-b427-441d-987e-b3b09a775148/Bank_lead.jpg?w=1200&h=768')`, // Background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <div className="Home-page text-center">
        <h1 className="heading" style={{ fontSize: '3rem', color: 'white' }}>Lokesh Bank</h1>
        <div className="gif-container">
          <img src="https://www.uschamber.com/sites/default/files/articles/images/023394_uschamber-donohue-commentary-bank-regulations-main-street-lending_atf.gif" alt="GIF" className="gif rounded" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}
