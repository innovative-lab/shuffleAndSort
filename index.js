(function(){

    var dataSet = [1,2,3,4,5,6,7,8,9];
    var colorSet = ['#6F98A8','#2B8EAD','#2F454E','#2B8EAD','#2F454E','#BFBFBF','#BFBFBF','#6F98A8',"#2F454E"];
    let numBoxEl = document.getElementById('num_box');
    let shuffleEl = document.getElementById('Shuffle');
    let sortEl = document.getElementById('Sort');
    
    var init = () => {
        sortEl.addEventListener('click', initiateSort);
        shuffleEl.addEventListener('click', initiateShuffle);
        resetUI();
        loadData(dataSet, numBoxEl);
    }

    var loadData = (dataSet, rootEleRef) => {
        dataSet.length && dataSet.forEach((d,i) => {
            var numEl = createElement(d);
            rootEleRef.appendChild(numEl);
        });
    }

    var createElement = d => {
        let numEl = document.createElement('div');
        numEl.className = 'number';
        numEl.innerHTML = d;
        numEl.style.backgroundColor = colorSet[d - 1]
        return numEl;
    }

    var resetUI = () => {
        numBoxEl.innerHTML = ''
    }

    var initiateSort = () => {
        dataSet.sort();
        resetUI();
        loadData(dataSet, numBoxEl);
    }

    var initiateShuffle = () => {
        dataSet = shuffleData(dataSet);
        resetUI();
        loadData(dataSet, numBoxEl);
    }

    var shuffleData = (array) => {
        var markerIndex = array.length, temporaryValue, randomIndex;
        while (0 !== markerIndex) {
          randomIndex = Math.floor(Math.random() * markerIndex);
          markerIndex -= 1;
          temporaryValue = array[markerIndex];
          array[markerIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    init();
    
})()
