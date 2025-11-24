const QUESTIONS = [
        {
            text: ``
        },
        {
            text: `<p>
            Для каждого вопроса выберите одно утверждение из группы,
            которое лучше всего описывает ваше поведение и/или чувства на прошлой неделе.
            </p>
            <p>
            Если у вас были спады и усиления симптомов, попробуйте оценить среднее значение за последнюю неделю.
            </p>
            <p>
            <u>Обязательно</u> прочитайте все утверждения в каждой группе, прежде чем сделать свой выбор.
            </p>
            `
        },
        {
            title: "Частота позывов",
            question: "Как часто в среднем в день вам хотелось выдернуть волосы?",
            choices: [
                {
                    score: 0,
                    text: "На этой неделе у меня не было желания выдергивать волосы"
                },
                {
                    score: 1,
                    text: "На этой неделе я время от времени чувствовал(а) желание выдернуть волосы"
                },
                {
                    score: 2,
                    text: "На этой неделе я почувствовал(а) желание часто выдергивать волосы"
                },
                {
                    score: 3,
                    text: "На этой неделе мне очень часто хотелось выдергивать волосы"
                },
                {
                    score: 4,
                    text: "На этой неделе я чувствовал(а) почти постоянные позывы выдергивать волосы"
                }
            ]
        }, {
            title: "Интенсивность позывов",
            question: "Насколько интенсивными или «сильными» были побуждения выдергивать волосы в обычный день?",
            choices: [
                {
                    score: 0,
                    text: "На этой неделе я не чувствовал(а) никаких позывов выдергивать волосы"
                },
                {
                    score: 1,
                    text: "На этой неделе я почувствовал(а) легкое побуждение выдергивать волосы"
                },
                {
                    score: 2,
                    text: "На этой неделе я почувствовал(а) умеренное побуждение выдергивать волосы"
                },
                {
                    score: 3,
                    text: "На этой неделе я почувствовал(а) сильное желание выдергивать волосы"
                },
                {
                    score: 4,
                    text: "На этой неделе я почувствовал(а) очень сильное желание выдергивать волосы"
                }
            ]
        },
        {
            title: "Способность контролировать побуждения",
            question: "В среднем в день, насколько вы контролируете желание выдергивать волосы?",
            choices: [
                {
                    score: 0,
                    text: "На этой неделе я всегда мог(ла) контролировать свои побуждения или я не чувствовал побуждений выдергивать волосы"
                },
                {
                    score: 1,
                    text: "На этой неделе я смог(ла) отвлечься от побуждений выдергивать волосы большую часть времени"
                },
                {
                    score: 2,
                    text: "На этой неделе я смог(ла) отвлечься от побуждений выдергивать волосы некоторое время"
                },
                {
                    score: 3,
                    text: "На этой неделе я редко мог(ла) отвлечься от побуждений выдергивать волосы"
                },
                {
                    score: 4,
                    text: "На этой неделе я никак не мог(ла) отвлечься от побуждений выдергивать волосы"
                }
            ]
        },
        {
            text: "В следующих трех вопросах оценивайте только фактическое выдергивание волос."
        },
        {
            title: "Частота выдергивания волос",
            question: "Как часто в среднем в день вы на самом деле выдергивали волосы?",
            choices: [
                {
                    score: 0,
                    text: "На этой неделе я не выдергивал(а) волосы"
                },
                {
                    score: 1,
                    text: "На этой неделе я время от времени выдергивал(а) волосы"
                },
                {
                    score: 2,
                    text: "На этой неделе я часто выдергивал(а) волосы"
                },
                {
                    score: 3,
                    text: "На этой неделе я очень часто выдергивал(а) волосы"
                },
                {
                    score: 4,
                    text: "На этой неделе я так часто выдергивал(а) волосы, что мне казалось, что я делаю это всегда"
                }
            ]
        },
        {
            title: "Попытки сопротивляться выдергиванию волос",
            question: "Как часто в среднем в день вы пытались удержаться от того, чтобы на самом деле выдергивать волосы?",
            choices: [
                {
                    score: 0,
                    text: "На этой неделе у меня не было желания выдергивать волосы"
                },
                {
                    score: 1,
                    text: "На этой неделе я почти все время пытался(ась) сопротивляться желанию выдергивать волосы"
                },
                {
                    score: 2,
                    text: "На этой неделе я пытался(ась) сопротивляться желанию выдергивать волосы"
                },
                {
                    score: 3,
                    text: "На этой неделе я редко пытался(ась) сопротивляться желанию выдергивать волосы"
                },
                {
                    score: 4,
                    text: "На этой неделе я никогда не пытался(ась) сопротивляться желанию выдергивать волосы"
                }
            ]
        },
        {
            title: "Контроль за выдергиванием волос",
            question: "Как часто в среднем в день вам удавалось удержаться от того, чтобы выдергивать волосы?",
            choices: [
                {
                    score: 0,
                    text: "На этой неделе я не выдергивал(а) волосы"
                },
                {
                    score: 1,
                    text: "На этой неделе я почти все время мог(ла) сопротивляться тому, чтобы не выдергивать волосы"
                },
                {
                    score: 2,
                    text: "На этой неделе я большую часть времени мог(ла) сопротивляться тому, чтобы не выдергивать волосы"
                },
                {
                    score: 3,
                    text: "На этой неделе я иногда сдерживался(ась), чтобы не выдергивать волосы"
                },
                {
                    score: 4,
                    text: "На этой неделе я редко мог(ла) удержаться от того, чтобы не выдергивать волосы"
                }
            ]
        },
        {
            text: "Что касается последнего вопроса, оцените последствия вашего выдергивания волос."
        },
        {
            title: " Ассоциированный дистресс",
            question: "Выдергивание волос может вызвать у некоторых людей депрессивное состояние, " +
                "тревожность или грусть.<br>" +
                "В течение последней недели насколько некомфортно вы чувствовали " +
                "себя из-за того, что выдергивали волосы?",
            choices: [
                {
                    score: 0,
                    text: "На этой неделе я не чувствовал(а) себя некомфортно из-за того, что выдергивал волосы"
                },
                {
                    score: 1,
                    text: "На этой неделе я чувствовал(а) себя немного некомфортно из-за того, что выдергивал волосы"
                },
                {
                    score: 2,
                    text: "На этой неделе я чувствовал(а) себя некомфортно из-за того, что выдергивал волосы"
                },
                {
                    score: 3,
                    text: "На этой неделе я чувствовал(а) себя существенно некомфортно из-за того, что выдергивал волосы"
                },
                {
                    score: 4,
                    text: "На этой неделе я чувствовал(а) интенсивное состояние дискомфорта из-за того, что выдергивал"
                }
            ]
        }
];

function questionFunction() {

    let questionCounter = 0;
    const SELECTIONS = [];
    const quiz = $('#quiz');

    displayNext();

    $('#next').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }

        if (isQuestion(questionCounter)) {
            saveSelectedOptionTo(SELECTIONS, questionCounter);

            if (isNaN(SELECTIONS[questionCounter])) {
                $('#warningModal').modal('show')
            } else {
                questionCounter++;
                displayNext();
            }
        } else {
            questionCounter++;
            displayNext();
        }
    });


    $('.button').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
        $(this).removeClass('active');
    });

    function createQuestionElement(index) {
        const qElement = $('<div>', {
            id: 'question'
        });

        const header = $(`<h3>${QUESTIONS[index].title}</h3>`);
        qElement.append(header);

        const question = $('<p>').append(QUESTIONS[index].question);
        qElement.append(question);

        const radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    function createRadios(index) {
        const radioList = $('<div>');
        let item;
        let input = '';
        for (let i = 0; i < QUESTIONS[index].choices.length; i++) {
            item = $('<div class="py-2">');
            radioList.append(item);
            nestedBlock = $('<div class="form-check" style="display:flex;align-items:center;">');
            item.append(nestedBlock);

            input = `<input class="form-check-input" style="margin-top:0;margin-right:.5rem;" type="radio" id="input-${i}" name="answer" value="${QUESTIONS[index].choices[i].score}" >`;
            input += `<label class="form-check-label" style="margin-bottom:0;" for="input-${i}" class="d-inline pl-1">${QUESTIONS[index].choices[i].text}</label>`;
            nestedBlock.append(input);
        }
        return radioList;
    }

    function saveSelectedOptionTo(array, index) {
        array[index] = +$('input[name="answer"]:checked').val();
    }

    function isQuestion(questionCounter) {
        return QUESTIONS[questionCounter].question !== undefined;
    }

    function displayNext() {
        quiz.fadeOut(function () {
            $('#question').remove();

            if (questionCounter === QUESTIONS.length) {
                showScore()
            } else if (isQuestion(questionCounter)) {
                quiz.append(createQuestionElement(questionCounter)).fadeIn();
                $('#next').show();
            } else {
                const questionTip = QUESTIONS[questionCounter].text;
                quiz.append(getQuestionTip(QUESTIONS[questionCounter].text)).fadeIn();
            }
        });
    }

    function getQuestionTip(textTip) {
        const score = $('<p>', {id: 'question'});
        score.append(textTip);
        return score;
    }

    function showScore() {

        const score = $('<p>', {id: 'question'});
        let totalScore = 0;
        for (let i = 0; i < SELECTIONS.length; i++) {
            if (Number.isInteger(SELECTIONS[i]))
                totalScore += SELECTIONS[i];
        }
        const percentage = getPercentage(totalScore);

        score.append($(`<p>У вас <strong>${totalScore}</strong> баллов.</p>`));
        score.append($(`<p>${getTipText(percentage)}</p>`));
        score.append($(`<p>Пройдите этот тест через какой-то промежуток 
                    времени для того, чтобы определить улучшение или ухудшение своего состояния.</p>`));

        quiz.append(score).fadeIn();
        $('#next').hide();

        const progressBarDiv = $('#progress-bar');
        progressBarDiv.append(`
            <div class="progress mb-1">
                <div class="progress-bar ${getBarColour(percentage)}" 
                     role="progressbar" style="width: ${percentage}%" aria-valuenow="${percentage}" aria-valuemin="0"
                     aria-valuemax="100"></div>
            </div>`);
    }

    function getBarColour(percentage) {
        if (percentage <= 25)
            return "bg-success";
        else if (percentage <= 50)
            return "bg-info";
        else if (percentage <= 75)
            return "bg-warning";
        else
            return "bg-danger";
    }

    function getTipText(percentage){
        if (percentage <= 25)
            return "Вы отлично справляетесь, но если вам нужна поддержка обратитесь к психотерапевту.";
        else if (percentage <= 50)
            return "Рекомендована консультация психотерапевта.";
        else if (percentage <= 75)
            return "Рекомендована психотерапия.";
        else
            return "Рекомендована психотерапия, а также прием у врача-психиатра для возможного " +
                "назначения медикаментозного лечения дополнительно к психотерапии.";
    }

    function getPercentage(score) {
        let maxScore = 0.0;
        for (let i = 0; i < QUESTIONS.length; i++) {
            if (isQuestion(i)) {
                let current = 0;
                for (let j = 0; j < QUESTIONS[i].choices.length; j++) {
                    current = Math.max(current, QUESTIONS[i].choices[j].score);
                }
                maxScore += current;
            }
        }
        return (100.0 / maxScore) * score;
    }
};

window.addEventListener('load', () => {
    questionFunction();
})
