import $ from 'jquery'

function getAvailableButtonsLang () {
  const $langEs = $('body').find('[lang]')
  const $langsButtons = $langEs.map((i, button) => {
    const lang = $(button).attr('lang')
    return lang
  })

  return $langsButtons
}

function getCurrentLang () {
  let currentLang = localStorage.getItem('locale')
  return currentLang
}

async function setLang (language='es') {
  return localStorage.setItem('locale', language)
}

async function displayCurrentLang () {
  $('#lang').empty().append(getCurrentLang())
}

$('.button').on('click', async function () {
  let lang = $(this).attr('lang')
  await setLang(lang)
  await displayCurrentLang()
})

displayCurrentLang()
