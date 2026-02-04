import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSurvey, clearSurvey } from "../redux/surveySlice";
import { Link } from "react-router-dom";

function Submission() {
  const dispatch = useDispatch();

  const submissions = useSelector((state) => state.survey.submissions);

  return (
    <div className="bg-purple-50 min-h-screen py-10 flex justify-center">
      <div className="w-full max-w-3xl mx-4">

        {/* Header */}
        <div className="bg-white rounded-t-lg border-t-8 border-purple-700 p-6 mb-5 shadow-sm flex justify-between items-center">
          <h1 className="text-2xl font-normal text-slate-900">
            Data Submission
          </h1>

          <Link
            to="/"
            className="text-purple-700 font-medium hover:underline"
          >
            Kembali ke Form
          </Link>
        </div>

        {/* Button clear */}
        {submissions.length > 0 && (
          <button
            onClick={() => dispatch(clearSurvey())}
            className="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Hapus Semua Data
          </button>
        )}

        {/* Data */}
        {submissions.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <p className="text-slate-700">Belum ada data yang dikirim.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  {item.nama}
                </h2>

                <p className="text-sm text-slate-700 mt-2">
                  <b>Umur:</b> {item.umur || "-"}
                </p>
                <p className="text-sm text-slate-700">
                  <b>Jenis Kelamin:</b> {item.jk || "-"}
                </p>
                <p className="text-sm text-slate-700">
                  <b>Perokok:</b> {item.perokok || "-"}
                </p>
                <p className="text-sm text-slate-700">
                  <b>Rokok yang dicoba:</b>{" "}
                  {item.rokok.length > 0 ? item.rokok.join(", ") : "-"}
                </p>

                <button
                  onClick={() => dispatch(deleteSurvey(item.id))}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Hapus Data Ini
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Submission;
