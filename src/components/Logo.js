import React from "react";
import { Link } from "react-router-dom";
import '../sass/logo.sass';

export default function Logo() {
  return (
    <Link className="logo" to="/"><b>AVENUE</b> FASHION</Link>
  );
}
