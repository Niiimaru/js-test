$(function () {
    $("#serch_btn").click(function () {
        event.preventDefault ();
        // 入力された値を取得
        var zip = $('#zipcode').val();
        // urlを設定
        var send_url = "https://zipcloud.ibsnet.co.jp/api/search";
        // 送るデータを成形する
        var param ={zipcode: $('#zipcode').val()};
        // サーバーと通信(Ajax)
        
        $.ajax({
            type: "POST",
            cache: false,
            data:param,
            url: "ajax.php",
            dataType: "jsonp"
        })
        .done(function (res) {
            if (res.status != 200) {
                // 通信には成功。APIの結果がエラー
                // エラー内容を表示
                $('#zip_result').html(res.message);
            } else {
                //住所を表示
                console.log(res)
                let html = `
                <div>
                    <p>${res.zipcode}</p>
                </div>
                `;

                $('#zip_result').html(html);
            }

        })
        .fail(function (error) {
            console.log(error);
            $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
        });
    });
});