import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const attendanceData = [
  { week: 'Week 1', present: 85, absent: 15 },
  { week: 'Week 2', present: 78, absent: 22 },
  { week: 'Week 3', present: 92, absent: 8 },
  { week: 'Week 4', present: 88, absent: 12 },
  { week: 'Week 5', present: 95, absent: 5 },
  { week: 'Week 6', present: 87, absent: 13 },
];

const monthlyTrend = [
  { month: 'Jan', percentage: 85 },
  { month: 'Feb', percentage: 88 },
  { month: 'Mar', percentage: 82 },
  { month: 'Apr', percentage: 90 },
  { month: 'May', percentage: 87 },
  { month: 'Jun', percentage: 89 },
];

export function AttendanceChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Weekly Attendance */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold mb-4 text-card-foreground">Weekly Attendance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="week" 
              tick={{ fontSize: 12 }} 
              stroke="hsl(var(--muted-foreground))"
            />
            <YAxis 
              tick={{ fontSize: 12 }} 
              stroke="hsl(var(--muted-foreground))"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Bar 
              dataKey="present" 
              fill="hsl(var(--success))" 
              radius={[4, 4, 0, 0]}
              name="Present"
            />
            <Bar 
              dataKey="absent" 
              fill="hsl(var(--destructive))" 
              radius={[4, 4, 0, 0]}
              name="Absent"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Trend */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold mb-4 text-card-foreground">Attendance Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }} 
              stroke="hsl(var(--muted-foreground))"
            />
            <YAxis 
              domain={[0, 100]}
              tick={{ fontSize: 12 }} 
              stroke="hsl(var(--muted-foreground))"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="percentage" 
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}