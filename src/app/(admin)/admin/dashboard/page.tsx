'use client'
import React, { useState, MouseEvent } from 'react'
import DashboardLayout from '../../_components/DashboardLayout'
import Dashboard from '../../_components/Dashboard'
import Users from '../../_components/Users'
import Transactions from '../../_components/Transactions'
import Notification from '../../_components/Notification'
import Feedback from '../../_components/Feedback'
import ActionPanel from '../../_components/ActionPanel'

const AdminDashboard = () => {
    const [ mode, setMode ] = useState<string>('home')
    const handleClick = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) =>{
        const { id } = e.currentTarget
        setMode(id)
      }

  return (
    <DashboardLayout handleClick = { handleClick } mode = { mode }>
        {
            mode === 'home' && (
                <Dashboard />
            )
        }
        {
            mode === 'users' && (
                <Users />
            )
        }
        {
            mode ==='transaction' && (
                <Transactions />
            )
        }
        {
            mode ==='notification' && (
                <Notification />
            )
        }
        {
            mode ==='action' && (
                <ActionPanel />
            )
        }
        {
            mode ==='feedback' &&(
                <Feedback />
            )
        }
    </DashboardLayout>
  )
}

export default AdminDashboard