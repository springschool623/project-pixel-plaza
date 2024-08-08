import Image from "next/image";
import styles from '../../../../styles/AboutUs.module.css';
import { VT323  } from "next/font/google";

const vt323 = VT323 ({ weight: '400', subsets: ['latin'] });

export default function AboutUs() {
    return(
        <div className={styles.margin}>
            <div className={styles.maindiv}>
                <div>
                    <Image src="/pixel-art-8395222_1280 copy.png" alt="Pixel Art" width={600} height={450} />
                </div>
                <div>
                    <div className={styles.headerContainer}>
                        <h2 className={`${vt323.className} ${styles.h3_text}`}>
                            Giới Thiệu
                        </h2>
                        <span className={styles.deco_image}>
                            <Image src="/subimgitem.png" width={30} height={25} alt="deco"/>
                        </span>
                    </div>
                    <h3>Cửa hàng Game - Phụ kiện Game - Thiên đường của game thủ</h3>
                    <p className={styles.p}>
                        Chuỗi cửa hàng Hobiverse (thuộc công ty cổ phần Việt Tinh Anh - Số ĐKKD: 0309132354 do sở kế hoạch và đầu tư cấp ngày 14/07/09) là nơi hội tụ cho các tín đồ đồ chơi nghệ thuật, hay còn gọi là Art toy. Art toy là lĩnh vực còn khá mới tại Việt Nam, đây không chỉ là những món đồ chơi để giải trí và trưng bày mà còn là một loại hình nghệ thuật mang giá trị tinh thần cao, vì mỗi sản phẩm đều có một câu chuyện ý nghĩa đằng sau cần người dùng tự mình khám phá.
                    </p>
                    <p className={styles.p}>
                        Hobiverse được tạo thành từ sự kết hợp giữa hobby (sở thích) và universe (vũ trụ), là nơi tụ hội những món đồ chơi theo sở thích. Cửa hàng đáp ứng được phần lớn nhu cầu của giới trẻ hiện nay về bộ môn Art toy, Nếu như trước đây các bạn trẻ phải tìm đến các địa chỉ xách tay và chờ đợi rất lâu, đồng thời lo sợ mua phải hàng nhái thì ngày nay các bạn có thể dễ dàng theo đuổi đam mê với chuỗi cửa hàng Hobiverse.
                    </p>
                </div>
            </div>
            <div className={styles.maindiv}>
                <div>
                    <h3>Bạn có thể tìm thấy những loại đồ chơi nào tại Hobiverse?</h3>
                    <p className={styles.p}>
                        Tại Hobiverse, bạn sẽ dễ dàng tìm thấy các sản phẩm của thương hiệu Pop Mart - dòng đồ chơi blind box nổi tiếng với các nhân vật đầy màu sắc, được sáng tạo bởi bàn tay tài hoa của các họa sĩ tên tuổi. Các chủ đề Skull Panda, Molly, Dimoo và rất nhiều IP (Intellectual Property - Sở hữu trí tuệ) liên tục ra mắt đã thu hút được sự quan tâm của giới trẻ. Hơn nữa, Pop Mart còn hợp tác với những IP lớn như Disney, DC, Universal để cho ra mắt các dòng sản phẩm phù hợp cho nhiều đối tượng khác nhau.
                    </p>
                    <p className={styles.p}>
                        Những ai yêu thích sưu tập các nhân vật đến từ manga và anime chắc chắn không thể bỏ qua dòng đồ chơi Banpresto. Loạt đồ chơi gây ấn tượng với người hâm mộ bởi các mô hình PVC cao cấp, đa dạng chủ đề từ các bộ anime huyền thoại cho đến các bộ phim nổi đình đám như One Piece, Dragon Ball, Demon Slayer, Jujutsu Kaisen...
                    </p>
                    <p className={styles.p}>
                        Đồ chơi Bandai Candy có khá nhiều chủ đề thú vị để sưu tập như móc khóa, đồ lưu niệm, đặc biệt là các dòng mô hình đến siêu anh hùng và cỗ máy chiến đấu tại Nhật Bản đến từ các thương hiệu như Gundam, Tokusatsu, Animagear... Hay các dòng Shokugan Modeling Project - SMP, SO - DO Chronicle, Mobile Suit Gundam G - Frame, Mobility Joint thích hợp cho các fan đam mê lắp ráp sưu tầm.
                    </p>
                    <p className={styles.p}>
                        Ngoài ra, cửa hàng đồ chơi Hobiverse cũng bày bán nhiều sản phẩm khác như đồ chơi lắp ghép LEGO Adult, Architecture, Technic, các figure nhân vật của Avengers của Marvel, League of Legends (Liên Minh Huyền Thoại)... để bạn thỏa sức chọn lựa.
                    </p>
                    <p className={styles.p}>
                        Dù cho bạn yêu thích những câu chuyện ma mị, bí ẩn đằng sau các bộ Art toy, hay đắm mình vào những thông điệp ngọt ngào của các câu chuyện về tình yêu và tình bạn, hoặc chỉ đơn giản là muốn sưu tầm những món đồ chơi của bộ phim mà mình yêu thích, bạn đều có thể tìm được tại Hobiverse.
                    </p>
                    <p className={styles.p}>
                        Hobiverse là nơi để các bạn trẻ tìm được chất riêng và viết nên câu chuyện của bản thân thông qua các món đồ chơi nghệ thuật, cũng là nơi tạo điều kiện cho những ai chưa từng tiếp xúc với  Art toy có cơ hội được tìm hiểu và trải nghiệm loại hình nghệ thuật mới mẻ này.
                    </p>
                </div>
                <div>
                    <Image src="/pixel-7272046_1280.png" alt="Pixel Art" width={600} height={450} className={styles.img_border}/>
                </div>
            </div>
        </div>
    )
}
