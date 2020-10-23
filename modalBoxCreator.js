const renderModalBox = async ({title = false, description = false, type = 'alert', 
buttons: {ok = 'Ok', cancel = false} = {ok: 'Ok', cancel: false}, placeholder = ''} = {type: 'alert', buttons: {ok: 'Ok', cancel: false}}) => new Promise((res, _) => {
  if(!!title){
    let dictionary = {alert: createAlertBox, confirm: createConfirmBox, input: createInputBox}
    dictionary[type] ? res(dictionary[type](title, description, ok, cancel, placeholder)) : res(false)
  }else{
    res(false)
  }
})

const createAlertBox = (title, description, btnOkText) => new Promise((res, _) => {
  const showBox = ()=>{setTimeout(()=>{document.getElementById('bgModalBox-modalCreator').style.opacity = '1'}, 10)}
  const hideBox = (result = true)=>{
    document.getElementById('bgModalBox-modalCreator').style.opacity = '0'
    setTimeout(()=>{try{document.getElementById('bgModalBox-modalCreator').remove()}catch(e){}}, 500)
    res(result)
  }
  title = title.length > 30 ? title.substring(0, 27).trim() + '...' : title
  description = description.length > 90 ? description.substring(0, 87).trim() + '...' : description
  let body = document.getElementsByTagName('body')[0]
  const bg = document.createElement('div')
  const modal = document.createElement('div')
  const btnClose = document.createElement('div')
  const modalTitle = document.createElement('h1')
  const modalDescription = document.createElement('p')
  const modalButtons = document.createElement('div')
  const btnOk = document.createElement('button')

  bg.id = 'bgModalBox-modalCreator'
  bg.onclick = () => {hideBox()}

  modal.id = 'modalBox-modalCreator'
  modal.addEventListener('click', e => {e.stopPropagation()})

  btnClose.id = 'btnClose-modalCreator'
  btnClose.addEventListener('click', ()=>{hideBox()})

  modalTitle.innerText = title
  modalDescription.innerText = description || ''

  modalButtons.id = 'modalButtons-modalCreator'

  btnOk.id = 'btnOk-modalCreator'
  btnOk.innerText = btnOkText
  btnOk.addEventListener('click', () => {hideBox()})

  modal.append(btnClose)
  modal.append(modalTitle)
  modal.append(modalDescription)
  modalButtons.append(btnOk)
  modal.append(modalButtons)
  bg.append(modal)

  body.insertBefore(bg, body.children[0])        
  showBox()
})

const createConfirmBox = (title, description, btnOkText, btnCancelText) => new Promise((res, _) => {
  const showBox = ()=>{setTimeout(()=>{document.getElementById('bgModalBox-modalCreator').style.opacity = '1'}, 10)}
  const hideBox = (result = false)=>{
    document.getElementById('bgModalBox-modalCreator').style.opacity = '0'
    setTimeout(()=>{try{document.getElementById('bgModalBox-modalCreator').remove()}catch(e){}}, 500)
    res(result)
  }
  title = title.length > 30 ? title.substring(0, 27).trim() + '...' : title
  description = description.length > 90 ? description.substring(0, 87).trim() + '...' : description

  let body = document.getElementsByTagName('body')[0]
  const bg = document.createElement('div')
  const modal = document.createElement('div')
  const btnClose = document.createElement('div')
  const modalTitle = document.createElement('h1')
  const modalDescription = document.createElement('p')
  const modalButtons = document.createElement('div')
  const btnOk = document.createElement('button')
  const btnCancel = document.createElement('button')

  bg.id = 'bgModalBox-modalCreator'
  bg.onclick = () => {hideBox()}

  modal.id = 'modalBox-modalCreator'
  modal.addEventListener('click', e => {e.stopPropagation()})

  btnClose.id = 'btnClose-modalCreator'
  btnClose.addEventListener('click', ()=>{hideBox()})

  modalTitle.innerText = title
  modalDescription.innerText = description || ''

  modalButtons.id = 'modalButtons-modalCreator'

  btnOk.id = 'btnOk-modalCreator'
  btnOk.innerText = btnOkText
  btnOk.addEventListener('click', () => {hideBox(true)})

  btnCancel.id = 'btnCancel-modalCreator'
  btnCancel.innerText = btnCancelText || 'Cancelar'
  btnCancel.addEventListener('click', () => {hideBox()})

  modal.append(btnClose)
  modal.append(modalTitle)
  modal.append(modalDescription)
  modalButtons.append(btnOk)
  modalButtons.append(btnCancel)
  modal.append(modalButtons)
  bg.append(modal)

  body.insertBefore(bg, body.children[0])
  showBox()
})

const createInputBox = (title, description, btnOkText, btnCancelText, placehoder = '') => new Promise((res, _) => {
  const showBox = ()=>{setTimeout(()=>{document.getElementById('bgModalBox-modalCreator').style.opacity = '1'}, 10)}
  const hideBox = (result = '')=>{
    document.getElementById('bgModalBox-modalCreator').style.opacity = '0'
    setTimeout(()=>{try{document.getElementById('bgModalBox-modalCreator').remove()}catch(e){}}, 500)
    res(result)
  }
  title = title.length > 30 ? title.substring(0, 27).trim() + '...' : title
  description = description.length > 90 ? description.substring(0, 87).trim() + '...' : description

  let body = document.getElementsByTagName('body')[0]
  const bg = document.createElement('div')
  const modal = document.createElement('div')
  const btnClose = document.createElement('div')
  const modalTitle = document.createElement('h1')
  const modalDescription = document.createElement('p')
  const inputText = document.createElement('input')
  const modalButtons = document.createElement('div')
  const btnOk = document.createElement('button')
  const btnCancel = document.createElement('button')

  bg.id = 'bgModalBox-modalCreator'
  bg.onclick = () => {hideBox()}

  modal.id = 'modalBox-modalCreator'
  modal.addEventListener('click', e => {e.stopPropagation()})

  btnClose.id = 'btnClose-modalCreator'
  btnClose.addEventListener('click', ()=>{hideBox()})

  modalTitle.innerText = title
  modalDescription.innerText = description || ''

  inputText.id = 'modalInputText-modalCreator'
  inputText.placeholder = placehoder

  modalButtons.id = 'modalButtons-modalCreator'

  btnOk.id = 'btnOk-modalCreator'
  btnOk.innerText = btnOkText
  btnOk.addEventListener('click', () => {hideBox(inputText.value)})

  btnCancel.id = 'btnCancel-modalCreator'
  btnCancel.innerText = btnCancelText || 'Cancelar'
  btnCancel.addEventListener('click', () => {hideBox()})

  modal.append(btnClose)
  modal.append(modalTitle)
  modal.append(modalDescription)
  modal.append(inputText)
  modalButtons.append(btnOk)
  modalButtons.append(btnCancel)
  modal.append(modalButtons)
  bg.append(modal)

  body.insertBefore(bg, body.children[0])
  showBox()
})

