# PhotoFlow Studio 5.2 — hướng dẫn nhanh

## Chạy ứng dụng
Giải nén toàn bộ PhotoFlow-Studio-5.2-Windows-x64.zip, mở thư mục PhotoFlow-Studio,
chạy PhotoFlow Studio.exe. Không tách EXE khỏi DLL, resources, locales. Không cần
Python hoặc Node.js để dùng bản này. Đây là bản chạy từ thư mục, không phải bộ cài
Setup một file. Trong app có Cài đặt và Hướng dẫn, dùng được khi không có Internet.

## Lọc ảnh vào thư mục
1. Chọn thư mục ảnh gốc bên trái. Hoặc bấm Nhập đường dẫn / Gần đây, dán đường dẫn
   đầy đủ trên máy hay đường dẫn mạng Windows đã truy cập được.
2. Mở từng thư mục con hoặc bật Gồm thư mục con. Ctrl chọn rời, Shift chọn dải,
   Chọn tất cả/Bỏ chọn. P giữ, X đánh dấu loại, 0–5 sao; X không xóa tệp.
3. Mở Quản lý thư mục đích: đặt tên, chọn đường dẫn bằng Duyệt hoặc dán đường dẫn,
   bấm Lưu tên & đường dẫn. Có tối đa 10 đích. Dùng đích này để chọn đích thao tác.
   Bỏ đường dẫn chỉ bỏ cấu hình, không xóa thư mục hay ảnh.
4. Thanh dưới luôn hiển thị đường dẫn nhận ảnh. Kiểm tra trước khi bấm Sao chép
   hoặc Di chuyển. Sao chép giữ ảnh gốc; Di chuyển kiểm tra SHA-256 rồi xóa nguồn.
   Trùng tên được báo lỗi và bỏ qua. Hoàn tác phục hồi một tệp trong phiên hiện tại.

## Cài đặt
- Giao diện sáng/tối, thời gian chờ tệp ổn định 1,5/3/5 giây.
- Bật/tắt tự cập nhật, mặc định theo ảnh mới nhất và quét thư mục con.
- Cấu hình lưu trên máy, không cần tài khoản. Danh sách gần đây không tự mở ảnh.
- Thông tin sinh viên được giữ nhưng tự đổi tên phải bật lại sau khi khởi động.

## Kết nối máy ảnh — nhiều hãng
PhotoFlow 5.2 không tích hợp SDK để bấm chụp hoặc live view trực tiếp. App nhận ảnh
đã truyền vào thư mục hệ thống tệp. Không cam kết mọi model hỗ trợ USB tether/Wi-Fi.

1. Mở Kết nối máy ảnh; chọn hãng và cách truyền:
   - USB: dùng phần mềm tương thích của hãng để lưu ảnh vào máy tính.
   - Wi-Fi/LAN: thiết lập phần mềm/máy ảnh truyền vào một thư mục máy tính.
   - Thẻ nhớ/ổ đĩa: chọn DCIM hoặc thư mục ảnh; không điều khiển chụp trong chế độ này.
2. Nút mở trang chính hãng cung cấp thông tin và danh sách model hỗ trợ:
   Canon EOS Utility, Nikon NX Tether, Sony Imaging Edge Desktop (Remote),
   FUJIFILM TETHER APP, Panasonic LUMIX Tether, OM Capture hoặc hãng khác.
3. Quét thiết bị Windows chỉ cho biết thiết bị mà Windows nhận diện. Có thể gồm
   webcam hoặc thiết bị ảnh khác; đây không phải xác nhận kết nối chụp từ xa.
4. Chọn đúng thư mục lưu đã đặt ở phần mềm hãng. Bấm Bắt đầu nhận ảnh / Chụp thử,
   sau đó chụp trên máy ảnh hoặc phần mềm hãng. PhotoFlow báo khi có tệp mới.
   Đóng hộp thoại để quay lại bàn xem ảnh; bật Theo ảnh mới nhất.
5. Dừng nhận ảnh chỉ dừng theo dõi trong PhotoFlow, không ngắt cáp/mạng máy ảnh.

Máy chỉ hiện dưới dạng MTP/PTP không có đường dẫn thư mục cần công cụ nhập ảnh
hoặc phần mềm hãng. Wi-Fi chưa được tự ghép đôi/cấu hình bởi app. Không có chức
năng tải phần mềm, cài driver hay mở bấm chụp trực tiếp tự động.

## Ảnh thẻ sinh viên
Các công cụ cũ được giữ: mã SV/họ tên/số thứ tự; đổi tên nhóm hoặc ảnh mới; cắt
2×3/3×4/4×6; sáng/tương phản; ghép tờ 10×15; xuất JPEG mới. Chờ nhận hết ảnh của
sinh viên hiện tại rồi đổi thông tin. RAW chưa có giải mã/chỉnh sửa trực tiếp.

## Kiểm thử và giới hạn
20 kiểm thử Node và 3 luồng kiểm thử DOM đã đạt. Kiểm thử camera dùng mô phỏng
Electron và tệp tạm, chưa thử máy ảnh/driver/Windows thật. Chưa kiểm chứng giao diện
bằng trình duyệt hiển thị thực trong môi trường xây dựng. Dùng ảnh sao lưu để thử
trước khi triển khai vào buổi chụp. Các giới hạn codec/in ảnh/hoàn tác của 5.1 vẫn áp dụng.

Tài liệu hãng dùng trong mục kết nối:
- https://www.usa.canon.com/support/eos-utilities
- https://www.nikonusa.com/content/nx-tether
- https://imagingedge.sony.net/en/ie-desktop.html
- https://www.fujifilm-x.com/global/support/download/software/tether-app/
- https://av.jpn.support.panasonic.com/support/global/cs/soft/download/d_lumixtether.html
- https://download.omsystem.com/pages/oc1download/en/
