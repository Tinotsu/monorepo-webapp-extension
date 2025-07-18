import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

interface SimpleTableRow {
  id: number
  created_at: string
  name: string
  user_id: string | null
}

export default function DatabaseView() {
  const [data, setData] = useState<SimpleTableRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('simple_table')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(10)

        if (error) {
          setError(error.message)
        } else {
          setData(data || [])
        }
      } catch (err) {
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="loading">Loading database...</div>
  }

  if (error) {
    return (
      <div className="error">
        Database Error: {error}
      </div>
    )
  }

  return (
    <div className="database-view">
      <h3 className="title">Database Data</h3>
      {data.length === 0 ? (
        <p className="no-data">No data found</p>
      ) : (
        <div className="data-list">
          {data.map((item, index) => (
            <div key={index} className="data-item">
              {JSON.stringify(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 