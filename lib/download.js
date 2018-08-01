function exportData(params, url) {
  params[authMobile] = storageHelper.getItem(authMobile)
  params[authToken] = storageHelper.getItem(authToken)
  params[xMerchantId] = storageHelper.getItem(xMerchantId)
  let exportUrl = prefix + url
  var temp = document.createElement("form");
  temp.action = exportUrl
  temp.method = "post"
  for(let key in params) {
    let input = document.createElement("input")
    input.setAttribute('name',key)
    input.setAttribute('value',params[key])
    temp.appendChild(input)
  }
  document.body.appendChild(temp)
  temp.style.display = "none"
  temp.submit()
}