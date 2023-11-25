import React from 'react';
import '../style/ProfileCard.css';

const ProfileCard = ({ name, username, imageSrc, socialLinks, studentID }) => {
    return (
        <div className="col-md-12 col-xl-4">
            <div className="profile-card shadow bg-white rounded">
                <div className="card-body text-center">
                    <div className="mb-4 mt-4">
                        <img src={imageSrc} className="rounded mx-auto d-block" style={{ width: '100px' }} alt="Profile Image" />
                    </div>
                    <h4 className="mb-2">{name}</h4>
                    <h5 className="mb-2">{studentID}</h5>
                    <p className="text-muted mb-4">@{username}</p>
                    <div className="mb-4 pb-2">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.url}>
                                <button type="button" className="btn btn-outline-primary btn-floating w-75 mt-2 profile-card-button">
                                    <i className={`fab ${link.icon} fa-lg`} />
                                </button>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
