'use client'

import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'

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
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError('')

      const { data, error } = await supabase
        .from('simple_table')
        .select('*')
        .order('created_at', { ascending: false })

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  if (loading) {
    return (
      <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>
        Loading data...
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
        padding: '20px',
        color: 'red',
        backgroundColor: '#ffebee',
        border: '1px solid #f44336',
        borderRadius: '4px',
        margin: '20px 0'
      }}>
        Error: {error}
      </div>
    )
  }

  return (
    <div style={{
      padding: '20px',
      margin: '20px 0'
    }}>
      <h2 style={{
        marginBottom: '20px',
        fontSize: '20px',
        fontWeight: 'bold'
      }}>
        Database Records ({data.length} items)
      </h2>

      {data.length === 0 ? (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          color: '#666',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px'
        }}>
          No data found in the table
        </div>
      ) : (
        <div style={{
          overflowX: 'auto'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: '1px solid #ddd'
          }}>
            <thead>
              <tr style={{
                backgroundColor: '#f2f2f2'
              }}>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  border: '1px solid #ddd',
                  fontWeight: 'bold'
                }}>
                  ID
                </th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  border: '1px solid #ddd',
                  fontWeight: 'bold'
                }}>
                  Name
                </th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  border: '1px solid #ddd',
                  fontWeight: 'bold'
                }}>
                  Created At
                </th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  border: '1px solid #ddd',
                  fontWeight: 'bold'
                }}>
                  User ID
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} style={{
                  borderBottom: '1px solid #ddd'
                }}>
                  <td style={{
                    padding: '12px',
                    border: '1px solid #ddd'
                  }}>
                    {row.id}
                  </td>
                  <td style={{
                    padding: '12px',
                    border: '1px solid #ddd'
                  }}>
                    {row.name}
                  </td>
                  <td style={{
                    padding: '12px',
                    border: '1px solid #ddd'
                  }}>
                    {formatDate(row.created_at)}
                  </td>
                  <td style={{
                    padding: '12px',
                    border: '1px solid #ddd',
                    fontFamily: 'monospace',
                    fontSize: '12px'
                  }}>
                    {row.user_id || 'null'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={fetchData}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Refresh Data
      </button>
    </div>
  )
} 