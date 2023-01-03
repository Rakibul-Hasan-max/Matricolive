import banner from "../../../images/banner2.png";

const AddBanner = () => {
    return (
        <div>
            <img style={{ width: "100%", maxHeight: "380px", margin: "50px 0" }} src={banner} alt="Product Banner" />
        </div>
    );
};

export default AddBanner;