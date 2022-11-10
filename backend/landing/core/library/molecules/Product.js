import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Product({modalRef, imgSrc, imgAlt, heading, subheading, description}) {
  const descriptionText = description ? description : 'Description will be added soon';
  return (
    <div className="product-item">
    <a className="product-link" data-bs-toggle="modal" href={`#${modalRef}`}>
      <div className="product-hover">
        <div className="product-hover-content">
          <FontAwesomeIcon className="fa-3x" icon={faPlus} />
        </div>
      </div>
      <img className="img-fluid" src={imgSrc} alt={imgAlt} />
    </a>
    <div className="product-caption">
      <div className="product-caption-heading">{heading}</div>
      <div className="product-caption-subheading text-muted">{subheading}</div>
    </div>
    <div className="product-modal modal fade" id={modalRef} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src={imgSrc}  alt={imgAlt} />
                                    <p>{descriptionText}</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            {heading}
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            {subheading}
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <FontAwesomeIcon className="me-1" icon={faXmark} />
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
}