let tasks=[];
let result='';
function draw() {
    document.getElementById('taskList').innerHTML='';
    for (let i=0; i<tasks.length; i++){
        document.getElementById('taskList').innerHTML +=
            `<tr style="background-color: ${tasks[i].result}">`+
            '<td>' + (i+1) + '</td>'+
            '<td>' + tasks[i].task  + '</td>'+
            '<td>' + tasks[i].date  + '</td>'+
            '</tr>'
    }

}
draw();

function addTask() {
    let task=document.forms['taskForm']['task'].value;
    let date=document.forms['taskForm']['date'].value;
    let day=date.substring(8);
    if (30-day>7){
        result='green'
    }
    else if (30-day<7 && 30-day>3){
        result='yellow'
    }
    else if (30-day<3){
        result='red'
    }
    let  newTask={
        task,
        date,
        result
    };
    tasks.push(newTask);
    draw()
}

function addStyle() {
    document.getElementById('click').classList.add('body-style')
}
function removeStyle() {
    document.getElementById('click').classList.remove('body-style')
}
function mouseOver() {
    document.getElementById('box').classList.add('box-style');
}
function mouseLeave() {
    document.getElementById('box').classList.remove('box-style');
}

