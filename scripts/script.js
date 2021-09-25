let select = document.getElementById("filterDrop");
let filterType = select.options[select.selectedIndex].value;

editButton.addEventListener("click", editItem);
        function editItem() {
            if (taskCreated.editable === false) {
                taskOutput.contentEditable = true;
                dateOutput.contentEditable = true;
                taskCreated.editable = true;
                liNew.style.backgroundColor = "#dddbdb";
            } else {
                taskOutput.contentEditable = false;
                dateOutput.contentEditable = false;
                taskCreated.editable = false;
                liNew.style.backgroundColor = "#efefef";
            }
        }