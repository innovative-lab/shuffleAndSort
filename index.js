(function(){

    var dataSet = [1,2,3,4,5,6,7,8,9];
    var colorSet = ['#6F98A8','#2B8EAD','#2F454E','#2B8EAD','#2F454E','#BFBFBF','#BFBFBF','#6F98A8',"#2F454E"];
    let numBoxEl = document.getElementById('num_box');
    let shuffleEl = document.getElementById('Shuffle');
    let sortEl = document.getElementById('Sort');
    let bodyEl = document.getElementsByTagName('body')[0];
    let mobScreen = false;
    
    var init = () => {
        sortEl.addEventListener('click', initiateSort);
        shuffleEl.addEventListener('click', initiateShuffle);
        window.addEventListener('resize', checkWidth);

        checkWidth(); 
    }

    var checkWidth = () => {
        mobScreen = bodyEl.offsetWidth < 600 ?  true : false;
        
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
        if(mobScreen){
            numEl.style.borderLeft = '8px';
            numEl.style.borderLeftStyle = 'solid';
            numEl.style.borderLeftColor = colorSet[d - 1];
            numEl.style.backgroundColor = "#efefef";
        } else {
            numEl.style.backgroundColor = colorSet[d - 1];
        }
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
