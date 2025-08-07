import { NextRequest, NextResponse } from 'next/server'

interface Product {
  _id: string
  name: string
  variant: string
  image: string[]
  price: string
  type: string
  color: string
  description: string
  features: string
  tableData: Array<{
    tableName: string
    columns: string[]
    rows: Record<string, string>[]
  }>
  showOnHomePage: boolean
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams || {}
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '12')
  const type = searchParams.get('type') || null
  const color = searchParams.get('color') || null
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''
  const search = searchParams.get('search') || ''

  try {
    // Build body only with non-null properties
    const body: Record<string, any> = {};
    const _id = searchParams.get('_id');
    const showOnHomePage = searchParams.get('showOnHomePage');

    // currently, we ony support below filters
    if (_id) body._id = _id;
    if (type) body.type = type;
    if (color) body.color = color;
    if (showOnHomePage !== null) body.showOnHomePage = (showOnHomePage === 'true');

    console.log(process.env.BACKEND_URL)
    console.log(body);

    const response = await fetch(`${process.env.BACKEND_URL}/getProducts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await response.json();

    return NextResponse.json({
      products: data
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
