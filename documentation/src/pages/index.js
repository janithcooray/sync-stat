import * as React from "react"
import Layout from "../components/layout"

export default function index() {
  return (
    <Layout>
      <p className="text-5xl font-bold">Intro (What The Hell is This?)</p>
      <br></br>
      <p>
        Sync stat is a Node module that replaces docker's mounted volumes ans
        file system sync. Mounted Docker fs on MacOS tends to be very slow as it
        has to syn the entire directory From APPFS to a Linux Based file system
      </p>
    </Layout>
  )
}
