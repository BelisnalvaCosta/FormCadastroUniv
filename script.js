 const resultsList = document.getElementById('results')
    ew URLSearchParams(window.location.search).forEach(
        (value, name)=>{
            resultsList.append('${name}: ${value}')
            resultsList.append(document.createElement('br'))
            }
        }
