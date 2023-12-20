const { removeListener } = require("gulp")

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll("[data-tab-button]")
  const questions = document.querySelectorAll("[data-faq-question]")

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(botao) {
      const tabTarget = botao.target.dataset.tabButton
      const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
      escondeAbas()
      tab.classList.add("shows__list--is-active")
      removeBotaoAtivo()
      botao.target.classList.add("shows__tabs__button--is-active")
    })
  }

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", answerToggle)
  }
})

function answerToggle(element) {
  const classe = "faq__questions__item--is-open"
  element.target.parentNode.classList.toggle(classe)
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]")

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active")
  }
}

function escondeAbas() {
  const tabs = document.querySelectorAll("[data-tab-id]")
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("shows__list--is-active")
  }
}

