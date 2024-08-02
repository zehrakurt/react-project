import styles from "./icon.module.scss";

const Cards = ({ icon, title, description, image }) => {
    return (
        <>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature  text-dark rounded-3 mb-4 mt-n4 "><i className={`bi ${styles.icn_1}`}>{icon}</i></div>
                        <h2 className="fs-4 fw-bold">{title}</h2>
                        <img src={image} alt={title} className={`img-fluid my-4 ${styles.img_1}`} />
                        <p className="mb-0">{description}</p>
                    </div>
                </div>
            </div></>
    )
}

export default Cards