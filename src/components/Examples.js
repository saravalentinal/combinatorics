import React from 'react'
import { Trans, useTranslation } from 'react-i18next';

export default function Examples(props) {

  const { t } = useTranslation();

  return (
    <>
        <div className="question-block">
            <h2 className='question'> {props.title} </h2>

            <div class="accordion" id="accordionPanelsStayOpenExample">
                
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    <Trans i18nKey="comb_without_rep_title">
                        <p className='example_title'>{t('examples.comb_without_rep_title')}</p>
                    </Trans>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                    <Trans i18nKey="comb_without_rep_ex">
                        <p className='answer_example'>{t('examples.comb_without_rep_ex')}</p>
                    </Trans>

                    <Trans i18nKey="is_order_important">
                        <p className='example_subtitle'>{t('examples.is_order_important')}</p>
                    </Trans>
                    
                    <Trans i18nKey="comb_without_rep_order">
                        <p className='answer_example'>{t('examples.comb_without_rep_order')}</p>
                    </Trans>

                    <Trans i18nKey="can_we_repeat">
                        <p className='example_subtitle'>{t('examples.can_we_repeat')}</p>
                    </Trans>

                    <Trans i18nKey="comb_without_rep_rep">
                        <p className='answer_example'>{t('examples.comb_without_rep_rep')}</p>
                    </Trans>

                    <Trans i18nKey="how_many_elements">
                        <p className='example_subtitle'>{t('examples.how_many_elements')}</p>
                    </Trans>

                    <Trans i18nKey="comb_without_rep_how_many">
                        <p className='answer_example'>{t('examples.comb_without_rep_how_many')}</p>
                    </Trans>
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <Trans i18nKey="comb_with_rep_title">
                        <p className='example_title'>{t('examples.comb_with_rep_title')}</p>
                    </Trans>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                    <Trans i18nKey="comb_with_rep_ex">
                        <p className='answer_example'>{t('examples.comb_with_rep_ex')}</p>
                    </Trans>

                    <Trans i18nKey="is_order_important">
                        <p className='example_subtitle'>{t('examples.is_order_important')}</p>
                    </Trans>
                    
                    <Trans i18nKey="comb_with_rep_order">
                        <p className='answer_example'>{t('examples.comb_with_rep_order')}</p>
                    </Trans>

                    <Trans i18nKey="can_we_repeat">
                        <p className='example_subtitle'>{t('examples.can_we_repeat')}</p>
                    </Trans>

                    <Trans i18nKey="comb_with_rep_rep">
                        <p className='answer_example'>{t('examples.comb_with_rep_rep')}</p>
                    </Trans>

                    <Trans i18nKey="how_many_elements">
                        <p className='example_subtitle'>{t('examples.how_many_elements')}</p>
                    </Trans>

                    <Trans i18nKey="comb_with_rep_how_many">
                        <p className='answer_example'>{t('examples.comb_with_rep_how_many')}</p>
                    </Trans>
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <Trans i18nKey="permutation_title">
                            <p className='example_title'>{t('examples.permutation_title')}</p>
                        </Trans>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        <Trans i18nKey="permutation_ex">
                            <p className='answer_example'>{t('examples.permutation_ex')}</p>
                        </Trans>

                        <Trans i18nKey="is_order_important">
                            <p className='example_subtitle'>{t('examples.is_order_important')}</p>
                        </Trans>
                        
                        <Trans i18nKey="permutation_order">
                            <p className='answer_example'>{t('examples.permutation_order')}</p>
                        </Trans>

                        <Trans i18nKey="can_we_repeat">
                            <p className='example_subtitle'>{t('examples.can_we_repeat')}</p>
                        </Trans>

                        <Trans i18nKey="permutation_rep">
                            <p className='answer_example'>{t('examples.permutation_rep')}</p>
                        </Trans>

                        <Trans i18nKey="how_many_elements">
                            <p className='example_subtitle'>{t('examples.how_many_elements')}</p>
                        </Trans>

                        <Trans i18nKey="permutation_how_many">
                            <p className='answer_example'>{t('examples.permutation_how_many')}</p>
                        </Trans>
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        <Trans i18nKey="var_without_rep_title">
                            <p className='example_title'>{t('examples.var_without_rep_title')}</p>
                        </Trans>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                    <div class="accordion-body">
                        <Trans i18nKey="var_without_rep_ex">
                            <p className='answer_example'>{t('examples.var_without_rep_ex')}</p>
                        </Trans>

                        <Trans i18nKey="is_order_important">
                            <p className='example_subtitle'>{t('examples.is_order_important')}</p>
                        </Trans>
                        
                        <Trans i18nKey="var_without_rep_order">
                            <p className='answer_example'>{t('examples.var_without_rep_order')}</p>
                        </Trans>

                        <Trans i18nKey="can_we_repeat">
                            <p className='example_subtitle'>{t('examples.can_we_repeat')}</p>
                        </Trans>

                        <Trans i18nKey="var_without_rep_rep">
                            <p className='answer_example'>{t('examples.var_without_rep_rep')}</p>
                        </Trans>

                        <Trans i18nKey="how_many_elements">
                            <p className='example_subtitle'>{t('examples.how_many_elements')}</p>
                        </Trans>

                        <Trans i18nKey="var_without_rep_how_many">
                            <p className='answer_example'>{t('examples.var_without_rep_how_many')}</p>
                        </Trans>
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                        <Trans i18nKey="var_with_rep_title">
                            <p className='example_title'>{t('examples.var_with_rep_title')}</p>
                        </Trans>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                    <div class="accordion-body">
                    <Trans i18nKey="var_with_rep_ex">
                            <p className='answer_example'>{t('examples.var_with_rep_ex')}</p>
                        </Trans>

                        <Trans i18nKey="is_order_important">
                            <p className='example_subtitle'>{t('examples.is_order_important')}</p>
                        </Trans>
                        
                        <Trans i18nKey="var_with_rep_oder">
                            <p className='answer_example'>{t('examples.var_with_rep_oder')}</p>
                        </Trans>

                        <Trans i18nKey="can_we_repeat">
                            <p className='example_subtitle'>{t('examples.can_we_repeat')}</p>
                        </Trans>

                        <Trans i18nKey="var_with_rep_rep">
                            <p className='answer_example'>{t('examples.var_with_rep_rep')}</p>
                        </Trans>

                        <Trans i18nKey="how_many_elements">
                            <p className='example_subtitle'>{t('examples.how_many_elements')}</p>
                        </Trans>

                        <Trans i18nKey="var_with_rep_how_many">
                            <p className='answer_example'>{t('examples.var_with_rep_how_many')}</p>
                        </Trans>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    </>
  );
}
