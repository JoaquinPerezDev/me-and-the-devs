import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticlePublish from "../components/ArticlePublish";

const API_URL = process.env.REACT_APP_API_URL;

function ArticleCreatePage() {

    return (
        <ArticlePublish />
    )

}

export default ArticleCreatePage;