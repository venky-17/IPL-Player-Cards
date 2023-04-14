const tabs = document.querySelector('.tabs');
const tabBtns = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');


function handleTabClick(event){
    //hide panels

  
    tabPanels.forEach(function(panel){
        panel.hidden = true;
    });
    //make tabs unselected

    tabBtns.forEach(tab => {
        tab.ariaSelected= false;
        tab.setAttribute('aria-selected', false)
    })

    //clkd tab as selected

    event.currentTarget.setAttribute('aria-selected', true)
//show the tab panel
const {id} = event.currentTarget;
const tabPanel = tabs.querySelector(`[aria-labelledby = "${id}"]`);
tabPanel.hidden = false;


}


tabBtns.forEach(button  => button.addEventListener('click',
handleTabClick));



