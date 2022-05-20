import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticlePublish from "../components/ArticlePublish";

const API_URL = "http://localhost:5005";

function ArticleCreatePage() {

    return (
        <ArticlePublish />
    )

}

export default ArticleCreatePage;