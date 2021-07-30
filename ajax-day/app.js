$(function () {
    $("#serch_btn").click(function () {
        // 入力された値を取得
        const textbox = document.getElementById("zipcode")
        const value = textbox.value
        // urlを設定
        var send_url = "https://zipcloud.ibsnet.co.jp/doc/api";
        // 送るデータを成形する
        var param = { zipcode: zipcode };
        // サーバーと通信(Ajax)
        
        $.ajax({
            type: POST,
            cache: false,
            data:param,
            url: send_url,
            dataType: "jsonp"
        })
        .done(function (res) {
            if (res.status != 200) {
                // 通信には成功。APIの結果がエラー
                // エラー内容を表示
                $('#zip_result').html(res.message);
            } else {
                //住所を表示
                $('#zip_result').html(html);
            }

        })
        .fail(function (error) {
            console.log(error);
            $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
        });
    });
});