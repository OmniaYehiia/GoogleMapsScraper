import React from "react";
import "./banner.css";

const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <h1 className="banner-text">Google Maps Scraper</h1>   
            </div>
            <div className="banner-subtext">
                <div className="container">
                    <form method="post">
                        <div class="mb-3">
                            <label for="query" class="form-label">Enter Search Query:</label>
                            <input type="text" id="query" name="query" class="form-control" placeholder="Search Here" required />
                        </div>
                        <button type="submit" class="btn btn-custom">Start Scraping</button>
                    </form>
                    
                    <div class="download-section">
                        <p class="mt-3">Your file is ready for download</p>
                        <a href="{{ url_for('download', filename=csv_path) }}" class="btn btn-success">Download CSV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;