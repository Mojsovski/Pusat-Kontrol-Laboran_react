import { Route, Routes } from "react-router-dom";
import InputPage from "../page/InputPage";

import DashboardPage from "../page/DashboardPage";
import InvEdit from "../component/InvEdit";
import LoginPage from "../page/LoginPage";
import ListPage from "../page/ListPage";
import EditInvPage from "../page/EditInvPage";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataFromApi } from "../store/InvSlice";
import Chatbot from "../page/Chatbot";
import InvDetail from "../component/InvDetail";

function Router() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataFromApi());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<DashboardPage />} />
      <Route path="/input-inventaris" element={<InputPage />} />
      <Route path="/list-inventaris" element={<ListPage />} />
      <Route path="/edit-inventaris" element={<EditInvPage />} />
      <Route path="/detail-inventaris/:id" element={<InvDetail />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/edit-inventaris/:id" element={<InvEdit />} />
    </Routes>
  );
}

export default Router;
