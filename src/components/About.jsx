import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
                Khi mà hiện nay ở trên thị trường, nguồn gốc cũng như chất
              lượng của chủng loại hàng này không được kiểm soát chặt chẽ. Điều
              này ảnh hưởng trực tiếp tới sức khỏe của các thành viên trong gia
              đình. Tình trạng ngộ độc trong thức ăn, trái cây hiện đang diễn ra
              phổ biến Đặc biệt các mặt hàng trái cây nhập khẩu được người tiêu
              dùng Việt Nam rất tin dùng trong thời gian qua. Tuy nhiên đảm bảo
              nguồn gốc sản phẩm cũng như chất lượng sản phẩm là yêu cầu cực kỳ
              quan trọng để khách hàng tin dùng và mua sắm. Với mục đích tạo
              niềm tin cho khách hàng khi được tiêu dùng các sản phẩm an toàn,
              chất lượng cao, Chuỗi Cửa hàng Trái cây nhập khẩu DP Fruits chuyên
              cung cấp các sản phẩm trái cây cao cấp cho người tiêu dùng với cam
              kết cao nhất về chất lượng, giá cả, chất lượng phục vụ tận tâm,
              chuyên nghiệp Với cam kết bảo đảm tuyệt đối về chất lượng, nguồn
              gốc sản phẩm, đội ngũ nhân viên chuyên nghiệp, nhiệt tình, chắc
              chắn Quý Khách hàng sẽ hài lòng khi sử dụng sản phẩm, dịch vụ của
              DP Fruits.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
