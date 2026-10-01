# Kiểm thử 5.2

- 20/20 kiểm thử Node.js đạt: các chức năng tệp/Studio Live/sinh viên cũ,
  kiểm tra cài đặt, phân tích thiết bị, whitelist liên kết hãng và tích hợp
  lưu cấu hình thư mục/cài đặt + nhận tệp mới ở bước kiểm tra camera.
- 3 luồng DOM đạt: thư viện ảnh; Studio Live; workspace mới (đích đặt tên,
  đường dẫn đích, thư mục gần đây, 10 đích sửa được, cài đặt, camera, hướng dẫn).
- Kiểm tra cú pháp JS, ID giao diện và đối chiếu source với ASAR bản đóng gói.
- Chưa chạy EXE/driver/máy ảnh thật trên Windows. Không kiểm chứng khả năng
  điều khiển máy ảnh trực tiếp (chức năng này chưa tích hợp).
- Thử tải trình duyệt kiểm tra giao diện thất bại; chưa có kiểm thử hiển thị thực.

Lệnh: npm test; trong qa chạy npm ci, node ui-smoke.cjs, node live-ui.cjs,
node workspace-ui.cjs. Kết quả Node lưu tại qa/tests-5.2.txt.
