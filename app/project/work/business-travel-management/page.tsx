import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../style.module.css'
import { Tooltip} from '@nextui-org/react'



export default function BusinessTravelMgt() {
  return (
    <div className={styles.titlespace}>
        <div className={styles.title}>
            <div className={styles.titleL}>
                <h1>Business Travel <br></br>& <code>Expense</code> Management</h1>
                <p>Quản lý Công tác và Chi phí công tác</p>
                <br></br>
                <br></br>
                <Tooltip content="Nội dung dự án vẫn được cập nhật" placement="right">
                    <h2>20-06-2023 12:01:41</h2> 
                </Tooltip>
                <br></br>
            </div>
            <div className={styles.titleR}>
                <Image src="/BusinessTravelMgt.png" alt="img" width={400} height={300} priority/> 
            </div>
        </div>

        <div className={styles.title}>
                <div className={styles.titleL}>
                    <Image src="/process.png" alt="img" width={941} height={216} priority/> 
                </div>
                <div className={styles.titleR}>
                    <p><Link href="/"><code className={styles.code}>Context</code></Link></p>
                    <p><Link href="/"><code className={styles.code}>Problem Statement</code></Link></p>
                    <p><Link href="/"><code className={styles.code}>Feature / Requirements</code></Link></p>
                    <p><Link href="/"><code className={styles.code}>Userflow & Mocks (Interface)</code></Link></p>
                    <p><Link href="/"><code className={styles.code}>Product Architecture & Components</code></Link></p>
                    <p><Link href="/"><code className={styles.code}>Other Considerations</code></Link></p>
                </div>
            </div>

        <div className={styles.contentspace}>
            

                
                <h2>Overview | Tổng quan</h2>
                <p>Tài liệu mô tả quy trình tổng quan của hệ thống … bao gồm các quy trình/ nghiệp vụ:</p>
                <p>-    Quy trình 1</p>
                <p>-    Quy trình 2</p>

                <h2>Project Information | Thông tin dự án</h2>
                <p> This is the first and most general category on the product requirements document. 
                    It’s a place to organize your product information and make sure it’s accurate. 
                    The point of this is to improve the customer experience.</p>
                <p> Đây là danh mục đầu tiên và chung nhất trong tài liệu yêu cầu sản phẩm. 
                    Đó là nơi sắp xếp thông tin sản phẩm của bạn và đảm bảo thông tin đó chính xác. 
                    Mục đích của việc này là để cải thiện trải nghiệm của khách hàng.</p>

                <h2>Problem Space</h2>
                <p> The previous website was not providing an optimal user experience and wasn’t converting visitors into customers. 
                    The homepage’s gallery was poorly aligned, with a lack of mobile responsiveness, minimal usability and no blog section.</p>
                <p> Trang web trước đó không cung cấp trải nghiệm người dùng tối ưu và không chuyển đổi khách truy cập thành khách hàng. 
                    Bộ sưu tập của trang chủ được căn chỉnh kém, thiếu khả năng đáp ứng trên thiết bị di động, khả năng sử dụng tối thiểu và không có phần blog.</p>
                <p> The website was not effectively showcasing the portfolio of the company or providing 
                    the necessary information for homeowners and business owners, hence the need for an upgrade.</p>
                <p> Trang web không hiển thị hiệu quả danh mục đầu tư của công ty hoặc cung cấp 
                    thông tin cần thiết cho chủ nhà và chủ doanh nghiệp, do đó cần phải nâng cấp.</p>
                

                <h2>Context | Bối cảnh</h2>
                <p> Giải quyết vấn đề người dùng mà bạn đang cố gắng giải quyết. 
                    Sử dụng một hoặc hai câu, cung cấp ngữ cảnh cấp cao để cung cấp cho các thành viên trong nhóm 
                    và các bên liên quan một bản tóm tắt về sản phẩm là gì và tại sao sản phẩm lại quan trọng 
                    đối với người dùng cuối.</p>

                <h2>Requirements</h2>
                <p> Liệt kê các mục tiêu của bạn theo thứ tự ưu tiên; cố gắng giữ cho danh sách ngắn gọn và các mục tiêu ngắn gọn. 
                    Viết ra các yêu cầu bạn cần đáp ứng, chẳng hạn như các chỉ số hiệu suất chính, 
                    các mốc quan trọng của dự án và các chỉ số thành công.</p>

                <h2>Proposed Solution | Giải pháp đề xuất</h2>
                <p> The new website will provide a medium for the company to showcase her work properly. 
                    I’ll be designing a project gallery with filter options, easy navigation and a better integration with social media.</p>
                <p> Trang web mới sẽ cung cấp phương tiện để công ty giới thiệu công việc của cô ấy một cách phù hợp. 
                    Tôi sẽ thiết kế một thư viện dự án với các tùy chọn bộ lọc, điều hướng dễ dàng và tích hợp tốt hơn với mạng xã hội.</p>
                <p> The previous website was a single-page-application, and since we’re looking to develop a more detailed product, 
                    I will be expanding the scope to include multiple pages, including a blog section where we can write some excerpts on Interior Design.</p>
                <p> Trang web trước đây là ứng dụng một trang và vì chúng tôi đang tìm cách phát triển một sản phẩm chi tiết hơn nên 
                    tôi sẽ mở rộng phạm vi để bao gồm nhiều trang, bao gồm cả phần blog nơi chúng tôi có thể viết một số đoạn trích về Thiết kế nội thất.</p>
                <p> With a difficulty in finding inspiration and the tedious process of navigating through different interior design styles and projects, 
                    I will make this process better by providing a user-friendly design, easier navigation, and advanced consultation booking system.</p>
                <p> Với khó khăn trong việc tìm kiếm nguồn cảm hứng và quá trình điều hướng tẻ nhạt qua các dự án và phong cách thiết kế nội thất khác nhau, 
                    tôi sẽ làm cho quá trình này tốt hơn bằng cách cung cấp một thiết kế thân thiện với người dùng, điều hướng dễ dàng hơn và hệ thống đăng ký tư vấn nâng cao.</p>

                <h2>Quy trình nghiệp vụ/ Business processes/ [Quy trình tổng quan của hệ thống]</h2>
                    <h3>Danh sách nhóm người dùng hệ thống</h3>
                    
                    <h3>[Mô hình tổng thể hệ thống]/ Business process diagrams</h3>

                <h2>Phân tích - Thiết kế hệ thống</h2>
                    <h3>Thiết kế kiến trúc hệ thống</h3>
                        <h4>Kiến trúc ứng dụng \ Mô hình phân rã chức năng</h4>
                    <h3>Thiết kế dữ liệu</h3>
                    <h3>Thiết kế các thủ tục</h3>
                    <h3>Thiết kế màn hình </h3>
                        <h4>Danh sách control/thành phần giao diện </h4>
                        <h4>Xử lý sự kiện </h4>
                        <h4></h4>

                <h2>Kiểm thử người dùng (UAT)</h2>
                    <h3>Kiểm tra nhóm Yêu cầu chức năng </h3>
                        <h4>Phân hệ ...</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên chức năng<br></br>(Usecase và các trường hợp sử dụng)</th>
                                    <th>Mô tả các bước kiểm thử</th>
                                    <th>Yêu cầu đạt được<br></br>(Kết quả mong muốn)</th>
                                    <th>Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>Hiển thị thông tin hồ sơ sức khỏe 
                                        <br></br>-	Bệnh nhân có thể chọn chức năng hồ sơ sức khỏe
                                        <br></br>-	Hệ thống có thể hiển thị các nhóm thông tin hồ sơ sức khỏe (bệnh sử)
                                    </td>
                                    <td>1. Mở ứng dụng Y bạ điện tử
                                        <br></br>2. Đăng nhập vào ứng dụng
                                        <br></br>3. Chọn Hồ sơ KCB
                                        <br></br>4. Chọn Theo dõi sức khỏe cá nhân
                                        <br></br>5. Chọn Thông tin bệnh sử
                                    </td>
                                    <td>Bệnh nhân có thể chọn chức năng hồ sơ sức khỏe</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <table>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Người sử dụng</th>
                                    <th>Vai trò</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="3">Nhóm người sử dụng cấp Quản Lý và Nhân Viên Bình Thường</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Nhân viên</td>
                                    <td>Xem, cập nhật thông tin cá nhân: lý lịch, nghỉ phép, đánh giá Nhân viên</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Cán bộ Quản lý</td>
                                    <td>Cập nhật và thao tác các nghiệp vụ Quản Lý Nhân sự.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Lãnh đạo Tổng Công ty và các Công ty Chi Nhánh</td>
                                    <td>Xem tình hình nhân sự, tra cứu các thông tin nhân sự hoặc xem các báo cáo thống kê nhân sự</td>
                                </tr>
                                <tr>
                                    <td colspan="3">Nhóm người sử dụng cấp Quản Lý và Nhân Viên Bình Thường</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Quản trị hệ thống</td>
                                    <td>Nhân viên quản trị hệ thống, quản trị thành viên, phân quyền, thực hiện các chính sách bảo mật, sao lưu, …</td>
                                </tr>
                            </tbody>
                        </table>
    
                <h2>Outcome</h2>
        </div>
    </div>
  )
}
