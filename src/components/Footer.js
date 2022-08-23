import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer() {

  const { t } = useTranslation();


  return (
    <div className='div-footer-box'>
      
        <a target="_blank" href="https://github.com/LobitoARG/Combinations"><i className="fa-brands fa-github"></i></a>

        <p className='made-by'>{t('footer.made')}<a target="_blank" href="https://www.linkedin.com/in/alejandro-j-3397a6144/" className='alejandro'>Alejandro</a> {t('footer.and')} <a target="_blank" href="https://www.linkedin.com/in/valentina-latyn/" className='valentina'>Valentina</a></p>

        <p className='all-rights'>{t('footer.rights')}</p>
        
    </div>
  )
}