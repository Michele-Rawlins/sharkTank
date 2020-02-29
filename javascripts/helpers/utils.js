const printToDom = (divId,textToPrint) => {
    // $('#tank')
     $(`#${divId}`).html(textToPrint);

};
export default { printToDom };