# **App Name**: CertMaster Pro

## Core Features:

- User Authentication: User authentication and authorization, with registration, login, and password recovery.
- Certificate Catalog: Browse, search, and filter available certificates.
- Exam Simulation: Simulate real exam conditions with a timer, question selection, and result analysis.
- Performance Tracking: Review past exam attempts with detailed performance analysis.
- Personalized Recommendations: Suggest tailored learning paths based on user performance, identifying areas for improvement; uses AI as a tool to create a report.

## Style Guidelines:

- Primary color: White or light gray for a clean, modern look.
- Secondary color: Dark gray or black for text and important elements.
- Accent: Blue (#007BFF) for interactive elements and highlights.
- Clean and minimal design inspired by Apple's website.
- Simple and modern icons for easy navigation.

## Original User Request:
**1. Frontend - User**

- **1.1 Public:** Ứng dụng được public ra ngoài internet, cho phép tất cả người dùng truy cập.
- **1.2 Màn hình:**
    - **1.2.1 Màn hình Đăng nhập:**
        - Form đăng nhập với email/số điện thoại và mật khẩu.
        - Tích hợp chức năng "Quên mật khẩu".
        - Liên kết đến màn hình Đăng ký.
    - **1.2.2 Màn hình Đăng ký:**
        - Form đăng ký với các trường thông tin cơ bản (tên, email/số điện thoại, mật khẩu,...).
        - Xác nhận mật khẩu.
        - Điều khoản sử dụng và Chính sách bảo mật.
    - **1.2.3 Màn hình Danh sách Chứng chỉ:**
        - Hiển thị danh sách các chứng chỉ có sẵn, có thể tìm kiếm và lọc theo tên, vendor, loại.
        - Mỗi chứng chỉ hiển thị thông tin cơ bản (tên, vendor, mô tả ngắn, hình ảnh đại diện).
    - **1.2.4 Màn hình Chi tiết Chứng chỉ:**
        - Hiển thị thông tin chi tiết về chứng chỉ (mô tả đầy đủ, nội dung, cấu trúc bài thi, yêu cầu,...)
        - Hiển thị "Thời gian có hiệu lực" (ngày hết hạn hoặc số ngày còn lại).
        - Các "Mode làm bài":
            - **Mode Học:** Không giới hạn thời gian, có thể xem đáp án ngay sau khi trả lời.
            - **Mode Test Thật:**
                - Có thể chọn số lượng câu hỏi và thời gian làm bài.
                - Có đồng hồ đếm ngược.
                - Sau khi hoàn thành, hiển thị kết quả (điểm số, số câu đúng/sai, thời gian hoàn thành).
                - Có thể xem lại đáp án sai và giải thích (nếu có).
    - **1.2.5 Màn hình Làm Bài Test:**
        - Giao diện câu hỏi rõ ràng, dễ đọc, hiển thị câu hỏi, các lựa chọn đáp án (trắc nghiệm, kéo thả,...).
        - Công cụ hỗ trợ:
            - **Memo:** Ghi chú cho câu hỏi.
            - **Highlight:** Đánh dấu câu hỏi.
            - **Đánh dấu:** Đánh dấu câu hỏi để xem lại sau.
        - Điều hướng giữa các câu hỏi (trước/sau).
        - Nút nộp bài (hiển thị rõ ràng thời gian còn lại).
    - **1.2.6 Màn hình Kết Quả:**
        - Hiển thị kết quả bài test (điểm số, số câu đúng/sai, thời gian hoàn thành).
        - Phân tích hiệu suất (điểm mạnh/yếu).
        - Xem lại đáp án (đúng/sai) và giải thích (nếu có).
        - Liên kết đến lịch sử làm bài.
    - **1.2.7 Màn hình Lịch Sử Làm Bài:**
        - Danh sách các bài test đã làm (chứng chỉ, thời gian, kết quả).
        - Có thể xem lại chi tiết từng bài test.
    - **1.2.8 Màn hình Thông Tin Cá Nhân (My Page):**
        - Hiển thị thông tin cá nhân (tên, email/số điện thoại, ảnh đại diện,...)
        - Cho phép chỉnh sửa thông tin.
        - Lịch sử làm bài.
        - Các chứng chỉ đã đăng ký (nếu có).

**2. Frontend - Admin**

- **2.1 Bảo mật:** Không public ra ngoài internet, yêu cầu đăng nhập bằng tài khoản admin.
- **2.2 Màn hình/Chức năng:**
    - **2.2.1 Dashboard:**
        - Tổng quan:
            - Số lượng người dùng.
            - Số lượng chứng chỉ.
            - Thống kê đăng ký mới theo thời gian.
            - Thống kê bài test được thực hiện.
        - Quản lý:
            - Liên kết nhanh đến các màn hình quản lý khác (admin, users, certificates).
    - **2.2.2 Quản lý Admin:**
        - Danh sách admin (tên, email,...).
        - Thêm/Sửa/Xóa admin.
    - **2.2.3 Quản lý Users:**
        - Danh sách users (tên, email/số điện thoại, thông tin cá nhân,...).
        - Tìm kiếm, lọc, sắp xếp users.
        - Xem chi tiết thông tin user.
        - Thêm/Sửa/Xóa user.
        - Assign/Unassign chứng chỉ cho user.
    - **2.2.4 Quản lý Chứng chỉ:**
        - **2.2.4.1 Quản lý Vendors:**
            - Danh sách vendors (tên, logo,...).
            - Thêm/Sửa/Xóa vendor.
        - **2.2.4.2 Quản lý Loại Chứng chỉ:**
            - Danh sách loại chứng chỉ (tên, vendor, mô tả,...).
            - Thêm/Sửa/Xóa loại chứng chỉ.
            - Quản lý câu hỏi cho từng loại chứng chỉ:
                - Thêm/Sửa/Xóa câu hỏi.
                - Import câu hỏi từ file (CSV, JSON,...).
    - **2.2.5 Assign Chứng chỉ cho User:**
        - **2.2.5.1 Danh sách Users:**
            - Tìm kiếm, lọc users.
            - Chọn user để assign chứng chỉ.
        - **2.2.5.2 Popup Assign Chứng chỉ:**
            - Chọn chứng chỉ để assign.
            - Thiết lập thời gian hiệu lực (ngày hết hạn hoặc số ngày).
            - Xác nhận assign.

**3. Backend - User**

- **3.1 APIs:**
    - Đăng ký/Đăng nhập.
    - Lấy danh sách chứng chỉ.
    - Lấy chi tiết chứng chỉ.
    - Làm bài test (lấy câu hỏi, lưu kết quả).
    - Lấy lịch sử làm bài.
    - Quản lý thông tin cá nhân.

**4. Backend - Admin**

- **4.1 APIs:**
    - Quản lý admin.
    - Quản lý users.
    - Quản lý vendors.
    - Quản lý loại chứng chỉ.
    - Assign/Unassign chứng chỉ cho user.

**5. Database**

- **5.1 Prisma:** Sử dụng Prisma ORM.
- **5.2 Schema (ví dụ):**

**text (auto)**

- **5.3 Migration:** Thực hiện migration sau mỗi thay đổi schema.

**6. Build, Deploy**

- **6.1 Docker Compose:** Sử dụng Docker Compose để quản lý các service (frontend user, frontend admin, backend user, backend admin, database).
- **6.2 Tạo Admin User:**
    - Thêm script vào Dockerfile hoặc docker-compose.yml để tạo admin user ban đầu khi khởi chạy container (có thể sử dụng seed data hoặc CLI command).
- **6.3 Triển khai:**
    - Build Docker images cho từng service.
    - Sử dụng Docker Compose để khởi chạy các container.
    - Cấu hình reverse proxy (ví dụ: Nginx) để định tuyến traffic đến frontend user và frontend admin (với các rule bảo mật cho frontend admin).

**7. Giao diện:**

- Thiết kế giao diện hiện đại, tối giản, tương tự apple.com.
- Chú trọng trải nghiệm người dùng (UI/UX).
- Sử dụng thư viện UI phổ biến (ví dụ: Material-UI, Ant Design, Tailwind CSS) để tăng tốc độ phát triển và đảm bảo tính thẩm mỹ.
  