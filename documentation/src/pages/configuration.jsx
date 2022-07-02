import React from "react"
import Layout from "../components/layout"

export default function main() {
  return (
    <Layout>
      <p className="text-5xl font-bold">Sync Compose Params</p>
      <br />
      <hr />
      <br />
      <div class="bg-white  overflow-hidden ">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            sync-compose.json Container parameters
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Container Definition.
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">contianer_name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                !Required must be a object that contains container mounts.{" "}
                <br /> my-container-name:{"{}"}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">from_location</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                project location to copy from
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">to_location</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                container's location to copy to. can be a mounted volume
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">only_on_load</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                default: false - specify if only should copy on sync-start{" "}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <hr />
      <br />
      <div className="bg-zinc-200 rounded h-auto p-8 text-blue-400">
        <span className="text-gray-700">
          sync-compose.json
          <br />
        </span>
        <br />
        <hr />
        <br />
        <span className="text-blue-800">{"{"}</span>
        <br />
        <span className="ml-4"></span>
        <span className="ml-4">
          "containers":<span className="text-blue-800">{"{"}</span>
        </span>
        <br />
        <span className="ml-12">
          "contianer_name":<span className="text-blue-800">{"{"}</span>
        </span>
        <br />
        <span className="ml-16">"to_location":"from_location"</span> <br />
        <span className="ml-8 text-blue-800">{"}"}</span>
        <br />
        <span className="ml-4 text-blue-800">{"}"}</span>
        <br />
        <span className="text-blue-800">{"}"}</span>
      </div>
    </Layout>
  )
}
