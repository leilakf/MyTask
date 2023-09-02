import React from 'react'

export default function Loding() {
  return (
    <div>
          <>
              <button class="btn btn-primary" type="button" disabled>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span class="sr-only">Loading...</span>
                  در حال دریافت اطلاعات...
              </button>
          </>
    </div>
  )
}
