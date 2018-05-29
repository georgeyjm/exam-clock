function addExam(type, name, paper, start, length) {
    let end = start.addMinute(length);
    let min5 = end.addMinute(-5);
    $('.exams-container').append(`
        <div class='exam''>
        <p class='name'>${type} ${name}<span class='paper'>${paper}</span></p>
        <table>
            <tr>
              <td>Start</td>
              <td class='time'>${start.string}</td>
            </tr>
            <tr>
              <td>5-min</td>
              <td class='time'>${min5.string}</td>
            </tr>
            <tr>
              <td>End</td>
              <td class='time'>${end.string}</td>
            </tr>
        </table>
        </div>
    `)
}

function setup() {
    frameRate(5);
    let now = new Time(hour(), minute(), second());
    addExam('IGCSE', 'Chemistry 0620', '62', now, 90);
    addExam('IGCSE', 'Computer Science 0478', '21', now, 75);
}

function draw() {
    $('.big-clock.hour').text(str(hour()).padStart(2, '0'));
    $('.big-clock.minute').text(str(minute()).padStart(2, '0'));
    $('.big-clock.second').text(str(second()).padStart(2, '0'));
}
