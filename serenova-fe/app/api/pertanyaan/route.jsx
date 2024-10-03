export async function GET(req) {
    // INI DUMMY
    const questions = [
        { question: "Apakah Anda merasa stres?", type: "truefalse", value: { true: 1, false: 0 } },
        { question: "Seberapa stres Anda merasa hari ini?", type: "likert5", value: 5 }, // max value is 5
        { question: "Apakah Anda merasa cukup tidur?", type: "truefalse", value: { true: 1, false: 0 } },
        { question: "Seberapa sering Anda berolahraga dalam seminggu?", type: "likert5", value: 5 }, // max value is 5
        { question: "Apakah Anda merasa tertekan dalam pekerjaan?", type: "truefalse", value: { true: 1, false: 0 } },
        { question: "Seberapa sering Anda merasa cemas?", type: "likert5", value: 5 }, // max value is 5
        { question: "Apakah Anda memiliki waktu untuk bersantai?", type: "truefalse", value: { true: 0, false: 1 } },
        { question: "Seberapa puas Anda dengan kehidupan Anda saat ini?", type: "likert5", value: 5 }, // max value is 5
        { question: "Apakah Anda merasa tertekan dengan deadline pekerjaan?", type: "truefalse", value: { true: 1, false: 0 } },
        { question: "Seberapa sering Anda merasa bahagia?", type: "likert5", value: 5 }, // max value is 5
        { question: "Apakah Anda merasa memiliki dukungan sosial yang baik?", type: "truefalse", value: { true: 1, false: 0 } },
        { question: "Seberapa besar Anda merasa memiliki kontrol atas hidup Anda?", type: "likert5", value: 5 }, // max value is 5
        { question: "Apakah Anda sering merasa lelah?", type: "truefalse", value: { true: 1, false: 0 } },
        { question: "Seberapa sering Anda merasa cemas tentang masa depan?", type: "likert5", value: 5 }, // max value is 5
        { question: "Apakah Anda merasa nyaman dengan rutinitas harian Anda?", type: "truefalse", value: { true: 0, false: 1 } },
        { question: "Seberapa baik Anda dapat mengelola waktu Anda?", type: "likert5", value: 5 }, // max value is 5
        { question: "Apakah Anda merasa stres akibat masalah keuangan?", type: "truefalse", value: { true: 1, false: 0 } },
        { question: "Seberapa sering Anda merasa kehilangan motivasi?", type: "likert5", value: 5 }, // max value is 5
        { question: "Apakah Anda merasa puas dengan pekerjaan Anda?", type: "truefalse", value: { true: 0, false: 1 } },
        { question: "Seberapa sering Anda merasa kewalahan?", type: "likert5", value: 5 }, // max value is 5
        { question: "Apakah Anda merasa memiliki waktu yang cukup untuk diri sendiri?", type: "truefalse", value: { true: 0, false: 1 } },
        { question: "Seberapa efektif Anda dalam menangani stres?", type: "likert5", value: 5 }, // max value is 5
    ];

    return new Response(JSON.stringify(questions), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
