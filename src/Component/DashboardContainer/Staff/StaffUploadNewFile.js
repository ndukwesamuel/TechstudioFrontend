import React from "react";

function StaffUploadNewFile() {
  return (
    <div
      class="modal "
      id="UploadNewfile"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog  bgColor4  cry">
        <div class="d-flex justify-content-end ">
          <button
            type="button"
            class="btn-close me-3 mt-3"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body ">
          <div>
            <h1 className="text-primary">Sam</h1>

            <button>Add file</button>
            <p className="Regular">or drop files to upload</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffUploadNewFile;
