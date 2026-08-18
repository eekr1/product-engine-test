import React from 'react';

export const DirectPhoneContactCard: React.FC = () => {
  return (
    <div className="sidebar-card" style={{ flex: 1, padding: 'var(--space-2xl)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
        <div className="authority-icon-box" style={{ width: '56px', height: '56px', fontSize: '24px' }}>
          📞
        </div>
        <div>
          <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-accent-primary)', fontWeight: 600 }}>
            DOĞRUDAN TELEFON KANALI
          </span>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
            Telefon ile Doğrudan İletişim
          </h3>
        </div>
      </div>

      <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: 'var(--space-xl)' }}>
        Trakya Teknik Makine yetkilileri ile doğrudan telefon görüşmesi başlatmak ve yetkili servis talebinde bulunmak için aşağıdaki bağlantıyı kullanabilirsiniz.
      </p>

      <div style={{ marginTop: 'auto' }}>
        <a
          href="tel:02820000000"
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '15px' }}
        >
          📞 Hemen Telefon ile Ulaşın
        </a>
        <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '8px' }}>
          Doğrudan Telefon Çağrısı Başlatır
        </p>
      </div>
    </div>
  );
};
