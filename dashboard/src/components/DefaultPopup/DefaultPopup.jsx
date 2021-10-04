import React from 'react'

const defaultPopup = () => {
    return (
        <section
      class="overlay mandatory-registration-popup mandatory-contract-popup visually-hidden"
    >
      <div class="mandatory-registration-popup__wrap">
        <button class="sign-wrap__btn">Закрыть</button>

        <div>
          <div class="mandatory-registration-popup__top-block">
            <p class="popup-worker-text">КОНТАКТ С АГЕНТСТВОМ ПО ТРУДОУСТРОЙСТВУ
            </p>
          </div>
        <div class="mandatory_contract-with-work">
          <p class="mandatory_orang-text">Даная просьба будет отправлена агентствам по трудоустройству, которые находятся в Вашем регионе
          </p>
          
        </div>
        </div>
      </div>
    </section>
    )
}

export default defaultPopup
