//////////////////////////////////////////////
// unequal wording

var instructions_1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1> Instructions </h1>
    <p> In this task you will listen to short audio sequences. </p>
    <p> Your task is to make judgments about how often some notes occur relative to others</p>
    <p> All of the sequences have 8 possible notes, and they range in how equally the notes are played in the sequence.</p>
    <p> Press continue for examples </p>
    `,
    css_classes: ["instruction_display"],
    choices: ['Continue'],
    post_trial_gap: 500
  }

  var instructions_2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1>Example: Unequal note sequences </h1>
    <p> This is an example of a very unequal sequence </p>
    <p> One of the eight notes is played almost all of the time.</p>
    <p> The other notes are played only once each.</p>
    <p> Press continue to listen to the example </p>
    `,
    css_classes: ["instruction_display"],
    choices: ['Continue'],
    post_trial_gap: 500
  }

  var instructions_3 = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'mp3s/freq_vec_1_1.mp3',
    prompt: `
    <h1>Example: Unequal note sequence </h1>
    <p> As the sequence plays notice that note occurrence is very unequal. </p>
    <p> One note occurs many times, and the others occur few times. </p>
    <p> In the main task you will be asked to judge whether the sequence is: </p>
    <p> "less equal" or "more equal" </p>
    <p> The correct answer for this sequence is ?</p>
    `,
    css_classes: ["instruction_display"],
    choices: ['less equal','more equal'],
    post_trial_gap: 500
  }

    var instructions_4 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1>Example: Equal note sequence  </h1>
    <p> This is an example of a completely equal sequence </p>
    <p> Each of the notes are played the same number of times.</p>
    <p> Press continue to listen to the example </p>
    `,
    css_classes: ["instruction_display"],
    choices: ['Continue'],
    post_trial_gap: 500
  }

  var instructions_5 = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'mp3s/freq_vec_12_8.mp3',
    prompt: `
    <h1>Example: Equal note sequence </h1>
    <p> As the sequence plays notice that the different notes occur equally often, and many times.</p>
    <p> In the main task you will be asked to judge whether the sequence is: </p>
    <p> "less equal" or "more equal" </p>
    <p> The correct answer for this sequence is ?</p>
    `,
    css_classes: ["instruction_display"],
    choices: ['less equal','more equal'],
    post_trial_gap: 500
  }

  var instructions_6 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1> Instructions </h1>
    <p> On each trial you will listen to an auditory sequence </p>
    <p> Some of the sequences have "more equal" notes, and some have "less equal" notes </p>
    <p> On each trial you will be asked to judge whether the sequence is "more equal", or "less equal".</p>
    <p> This task takes about 10-15 minutes </p>
    <p> Press continue to begin when ready.</p>
    `,
    css_classes: ["instruction_display"],
    choices: ['Continue'],
    post_trial_gap: 500
  }


//////////////////////////////////////////////
// Same Different

var instructions_1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1> Instructions </h1>
    <p> In this task you will listen to short audio sequences. </p>
    <p> The sequences vary in the amount of repeated notes.</p>
    <p> Your task is to judge whether the sequence has mostly the same notes or mostly different notes. </p>
    <p> Press continue for examples </p>
    `,
    css_classes: ["instruction_display"],
    choices: ['Continue'],
    post_trial_gap: 500
  }

  var instructions_2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1>Example: Same note sequence </h1>
    <p> The next sequence is mostly the same note repeated.</p>
    <p> One of the notes is played almost all of the time.</p>
    <p> The other notes are played only once each.</p>
    <p> Press continue to listen to the example </p>
    `,
    css_classes: ["instruction_display"],
    choices: ['Continue'],
    post_trial_gap: 500
  }

  var instructions_3 = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'mp3s/freq_vec_1_1.mp3',
    prompt: `
    <h1>Listen: Same note sequence </h1>
    <p> Listen to the sequence. </p>
    <p> This sequence is mostly the same note(s).</p>
    <p> In the main task you will be asked to judge whether the notes are: </p>
    <p> "Mostly Same" or "Mostly Different" </p>
    <p> The correct answer for this sequence is ?</p>
    `,
    css_classes: ["instruction_display"],
    choices: ['Mostly Same','Mostly Different'],
    post_trial_gap: 500
  }

    var instructions_4 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1>Example: Different note sequence  </h1>
    <p> The next sequence are mostly different notes.</p>
    <p> All of the possible notes are played an equal number of times.</p>
    <p> Press continue to listen to the example </p>
    `,
    css_classes: ["instruction_display"],
    choices: ['Continue'],
    post_trial_gap: 500
  }

  var instructions_5 = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'mp3s/freq_vec_12_8.mp3',
    prompt: `
    <h1>Listen: Different note sequence </h1>
    <p> Listen to the sequence. </p>
    <p> This sequence is mostly different notes.</p>
    <p> In the main task you will be asked to judge whether the notes are: </p>
    <p> "Mostly Same" or "Mostly Different" </p>
    <p> The correct answer for this sequence is ?</p>
    `,
    css_classes: ["instruction_display"],
    choices: ['Mostly Same','Mostly Different'],
    post_trial_gap: 500
  }

  var instructions_6 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <h1> Instructions </h1>
    <p> On each trial you will listen to an auditory sequence </p>
    <p> Some of the sequences have "mostly same" notes, and some have "mostly different" notes </p>
    <p> On each trial you will judge whether the notes are "mostly same", or "mostly different".</p>
    <p> This task takes about 10-15 minutes </p>
    <p> Press continue to begin when ready.</p>
    `,
    css_classes: ["instruction_display"],
    choices: ['Continue'],
    post_trial_gap: 500
  }
